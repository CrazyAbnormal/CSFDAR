<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sections extends Model
{
    protected $fillable = [
        'name',
        'division_id'
    ];

    public function division()
    {
        return $this->belongsTo(Divisions::class, 'division_id');
    }

    public function services()
    {
        return $this->hasMany(Services::class, 'sections_id');
    }
}

