<?php

use Illuminate\Database\Migrations\Migration;

class CretaeRoleTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create(
            'role',
            function($table){
                $table->increments('id');
                $table->string('name', 100);
                $table->text('access')->nullable();
                $table->integer('created_by')->nullable;
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
		Schema::dropIfExists('role');
	}

}