<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Intoxication extends Model
{
    use HasFactory;

    protected $table = "intoxications";

    protected $fillable = [
        'dateRegister',
        'symptoms',
        'severety',
        'treatment',
        'patient_id',
        'type_id'
    ];
}
