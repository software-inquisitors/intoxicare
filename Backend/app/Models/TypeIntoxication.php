<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypeIntoxication extends Model
{
    use HasFactory;

    protected $table = "type_intoxications";

    protected $fillable = [
        'name',
        'description'
    ];

    public function Intoxications()
    {
        return $this->hasMany(TypeIntoxication::class);
    }
}
