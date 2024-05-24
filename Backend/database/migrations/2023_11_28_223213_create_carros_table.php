<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('carros', function (Blueprint $table) {
            $table->id();
            $table->integer('serie')->length(10);
            $table->string('model')->default("Alejo");
            $table->string('manufacturer')->default("UpsCloud");
            $table->string('plate')->unique();
            $table->boolean('isNew');
            $table->boolean('isWarranted')->nullable();
            $table->date('entryDate');
            $table->date('purchaseDate');
            $table->timestamps();
            $table->unsignedBigInteger('category_id');
            $table->foreign('category_id')->references('id')->on('categories');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carros');
    }
};
