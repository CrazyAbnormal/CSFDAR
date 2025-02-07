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
        Schema::create('c_s_f_forms', function (Blueprint $table) {
            $table->id();
            $table->string('control_number')->unique(); 
            $table->foreignId('customer_id');
            $table->foreign('customer_id')
                  ->references('id')
                  ->on('customers');
            $table->foreignId('divisions_id');
            $table->foreign('divisions_id')
                    ->references('id')
                    ->on('divisions');
            $table->foreignId('services_id');
            $table->foreign('services_id')
                    ->references('id')
                    ->on('services');
           
            $table->string('client_type')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('c_s_f_forms');
    }
};
