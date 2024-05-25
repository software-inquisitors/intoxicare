<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Carro extends Model
{
    use HasFactory;

    protected $table = "carros";

    protected $fillable = [
        'serie',
        'model',
        'manufacturer',
        'plate',
        'isNew',
        'isWarranted',
        'entryDate',
        'purchaseDate',
        'category_id'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
