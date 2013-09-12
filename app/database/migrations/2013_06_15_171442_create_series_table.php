<?php

use Illuminate\Database\Migrations\Migration;

class CreateSeriesTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        Schema::create(
            'series',
            function ($table) {
                $table->increments('id');
                $table->integer('brand_id');
                $table->string('name', 100);
                $table->timestamps();
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
		Schema::dropIfExists('series');
	}

}