<?php

use Illuminate\Database\Migrations\Migration;

class CretaeUserTable extends Migration
{

    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(
            'user',
            function ($table) {
                $table->increments('id');
                $table->string('email', 100);
                $table->string('password', 70);
                $table->string('name', 100);
                $table->string('company_name')->nullable();
                $table->string('phone', 20)->nullable();
//                $table->integer('role_id');
                $table->boolean('is_admin')->default(false);
                $table->timestamps();
                $table->softDeletes();

                $table->index('email');
            }
        );
	}

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user');
    }

}