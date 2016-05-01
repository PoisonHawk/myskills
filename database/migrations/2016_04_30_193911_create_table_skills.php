<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableSkills extends Migration
{
    /**
     * Run the migrations.
     * id, name, color, rate, user_id
     *
     *
     * @return void
     */
    public function up()
    {
        Schema::create('skills', function($table){
          $table->bigIncrements('id');
          $table->integer('user_id');
          $table->string('name', 30);
          $table->string('color')->nullable();
          $table->integer('rate')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('skills');
    }
}
