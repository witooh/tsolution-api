<?php

use Illuminate\Database\Migrations\Migration;

class CreateKnowledgeCategoryTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        Schema::create('knowledge_category',
            function ($table) {
                $table->increments('id');
                $table->string('name', 100);
                $table->timestamps();

                $table->index('name');
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
		Schema::dropIfExists('knowledge_category');
	}

}