<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TrackResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'artist' => $this->artist,
            'genre' => $this->genre,
            'bpm' => $this->bpm,
            'key' => $this->key,
            'dropbox_link' => $this->dropbox_link,
            'youtube_link' => $this->youtube_link,
            'duration' => $this->duration,
            'year' => $this->year,
            'deleted_at' => $this->deleted_at,
        ];
    }
}
