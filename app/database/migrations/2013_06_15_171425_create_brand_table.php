<?php

use Illuminate\Database\Migrations\Migration;

class CreateBrandTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        Schema::create(
            'brand',
            function ($table) {
                $table->increments('id');
                $table->string('type', 100);
                $table->string('name', 100);
                $table->timestamps();

                $table->index('type');
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
		Schema::dropIfExists('brand');
	}

}