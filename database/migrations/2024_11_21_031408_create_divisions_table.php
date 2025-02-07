<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDivisionsTable extends Migration
{
    public function up()
    {
        Schema::create('divisions', function (Blueprint $table) {
            $table->id(); // This creates an auto-incrementing primary key
            $table->string('name');
            $table->string('short_name');
            $table->text('description')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('divisions');
    }
}

