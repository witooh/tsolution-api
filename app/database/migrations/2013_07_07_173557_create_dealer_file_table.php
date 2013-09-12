<?php

use Illuminate\Database\Migrations\Migration;

class CreateDealerFileTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        Schema::create('dealer_file',
            function ($table) {
                $table->increments('id');
                $table->string('title', 100);
                $table->text('file')->nullable();
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
		Schema::drop('dealer_file');
	}

}