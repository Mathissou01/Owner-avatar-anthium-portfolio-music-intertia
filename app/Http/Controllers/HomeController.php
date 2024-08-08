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

class HomeController extends Controller
{
    /**
     * Display the Home view.
     */
      public function index(): Response
        {
            // Récupération de toutes les pistes depuis la base de données
            $tracks = Track::all();

            // Retourner la vue avec les pistes encapsulées dans TrackCollection
            return Inertia::render('Home/Index', [
                'tracks' => new TrackCollection($tracks),
            ]);
        }
    }
