<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;

class TrackStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => ['required', 'max:50'],
            'artist' => ['required', 'max:50'],
            'genre' => ['nullable', 'max:50'],
            'bpm' => ['nullable', 'max:50'],
            'key' => ['nullable', 'max:150'],
            'dropbox_link' => ['nullable', 'max:800'],
            'youtube_link' => ['nullable', 'max:800'],
            'duration' => ['nullable', 'max:50'],
            'year' => ['nullable', 'max:25'],
        ];
    }
}
