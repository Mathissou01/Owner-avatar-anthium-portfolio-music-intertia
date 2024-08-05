<?php

namespace App\Http\Controllers;

use App\Http\Requests\TrackStoreRequest;
use App\Http\Requests\TrackUpdateRequest;
use App\Http\Resources\TrackCollection;
use App\Http\Resources\TrackResource;
use App\Http\Resources\UserOrganizationCollection;
use App\Models\Track;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;
use Inertia\Response;

class TracksController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Tracks/Index', [
            'filters' => Request::all('search', 'trashed'),
            'tracks' => new TrackCollection(
                Auth::user()->account->tracks()
                    ->with('organization')
                    ->orderByName()
                    ->filter(Request::only('search', 'trashed'))
                    ->paginate()
                    ->appends(Request::all())
            ),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Tracks/Create', [
            'organizations' => new UserOrganizationCollection(
                Auth::user()->account->organizations()
                    ->orderBy('name')
                    ->get()
            ),
        ]);
    }

    public function store(TrackStoreRequest $request): RedirectResponse
    {
        Auth::user()->account->tracks()->create(
            $request->validated()
        );

        return Redirect::route('tracks')->with('success', 'Track created.');
    }

    public function edit(Track $track): Response
    {
        return Inertia::render('Tracks/Edit', [
            'track' => new TrackResource($track),
            'organizations' => new UserOrganizationCollection(
                Auth::user()->account->organizations()
                    ->orderBy('name')
                    ->get()
            ),
        ]);
    }

    public function update(Track $track, TrackUpdateRequest $request): RedirectResponse
    {
        $track->update(
            $request->validated()
        );

        return Redirect::back()->with('success', 'Track updated.');
    }

    public function destroy(Track $track): RedirectResponse
    {
        $track->delete();

        return Redirect::back()->with('success', 'Track deleted.');
    }

    public function restore(Track $track): RedirectResponse
    {
        $track->restore();

        return Redirect::back()->with('success', 'Track restored.');
    }
}
