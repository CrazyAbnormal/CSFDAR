<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Divisions extends Model
{
    protected $fillable = [
        'name',
        'short_name',
        'slug'
    ];

    public function sections()
    {
        return $this->hasMany(Sections::class, 'division_id');
    }

    public function services()
    {
        return $this->hasMany(Services::class, 'division_id');
    }
}