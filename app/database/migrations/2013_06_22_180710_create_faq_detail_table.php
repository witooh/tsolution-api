<?php

use Illuminate\Database\Migrations\Migration;

class CreateFaqDetailTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        Schema::create('faq_detail',
            function ($table) {
                $table->increments('id');
                $table->integer('category_id');
                $table->string('title', 100);
                $table->text('link')->nullable();
                $table->timestamps();

                $table->index('category_id');
                $table->index('title');
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
		Schema::dropIfExists('faq_detail');
	}

}