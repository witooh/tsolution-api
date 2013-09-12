<?php

use Illuminate\Database\Migrations\Migration;

class CreateProductTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        Schema::create(
            'product',
            function ($table) {
                $table->increments('id');
                $table->integer('series_id');
                $table->string('name', 100);
                $table->text('thumb')->nullable();
                $table->text('img')->nullable();
                $table->text('intro')->nullable();
                $table->text('detail')->nullable();
                $table->text('feature')->nullable();
                $table->text('spec')->nullable();
                $table->text('require')->nullable();
                $table->text('download')->nullable();
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
		Schema::dropIfExists('product');
	}

}