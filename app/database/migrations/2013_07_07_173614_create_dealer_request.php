<?php

use Illuminate\Database\Migrations\Migration;

class CreateDealerRequest extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        Schema::create('dealer_request',
            function ($table) {
                $table->increments('id');
                $table->string('title', 100);
                $table->text('content');
                $table->integer('created_by');
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
		Schema::dropIfExists('dealer_request');
	}

}