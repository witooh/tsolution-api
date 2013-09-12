<?php

use Illuminate\Database\Migrations\Migration;

class CreateKnowledgeDetailTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
        Schema::create('knowledge_detail',
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
		Schema::dropIfExists('knowledge_detail');
	}

}