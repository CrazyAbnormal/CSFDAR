<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Services extends Model
{
    protected $fillable = [
        'name',
        'division_id',
        'sections_id'
    ];

    public function division()
    {
        return $this->belongsTo(Divisions::class, 'division_id');
    }

    public function section()
    {
        return $this->belongsTo(Sections::class, 'sections_id');
    }
}
