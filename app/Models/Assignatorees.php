<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Assignatorees extends Model
{
    use HasFactory;
    protected $fillable = [
        'division_id',
        'name',
        'designation',
    ];
}
