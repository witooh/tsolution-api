<?php

use Illuminate\Database\Migrations\Migration;

class CreateCategoryTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
    public function up()
    {
        Schema::create('category',
            function ($table) {
                $table->increments('id');
                $table->integer('created_by');
                $table->string('name', 100);
                $table->timestamps();

                $table->index('name');
                //$table->index('created_by');
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
        Schema::dropIfExists('category');
    }

}