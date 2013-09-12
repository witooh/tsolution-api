<?php
/**
 * An helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace {
/**
 * An Eloquent Model: 'Brand'
 *
 * @property integer $id
 * @property string $type
 * @property string $name
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
	class Brand {}
}

namespace {
/**
 * An Eloquent Model: 'Category'
 *
 * @property integer $id
 * @property integer $created_by
 * @property string $name
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
	class Category {}
}

namespace {
/**
 * An Eloquent Model: 'Content'
 *
 * @property integer $id
 * @property integer $category_id
 * @property integer $created_by
 * @property string $title
 * @property string $short
 * @property string $thumb
 * @property string $img
 * @property string $content
 * @property boolean $published
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
	class Content {}
}

namespace {
/**
 * An Eloquent Model: 'FaqCategory'
 *
 * @property integer $id
 * @property string $name
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
	class FaqCategory {}
}

namespace {
/**
 * An Eloquent Model: 'FaqDetail'
 *
 * @property integer $id
 * @property integer $category_id
 * @property string $title
 * @property string $link
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
	class FaqDetail {}
}

namespace {
/**
 * An Eloquent Model: 'KnowledgeCategory'
 *
 * @property integer $id
 * @property string $name
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
	class KnowledgeCategory {}
}

namespace {
/**
 * An Eloquent Model: 'KnowledgeDetail'
 *
 * @property integer $id
 * @property integer $category_id
 * @property string $title
 * @property string $link
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
	class KnowledgeDetail {}
}

namespace {
/**
 * An Eloquent Model: 'Product'
 *
 * @property integer $id
 * @property integer $series_id
 * @property string $name
 * @property string $thumb
 * @property string $img
 * @property string $intro
 * @property string $detail
 * @property string $feature
 * @property string $spec
 * @property string $require
 * @property string $download
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
	class Product {}
}

namespace {
/**
 * An Eloquent Model: 'Series'
 *
 * @property integer $id
 * @property integer $brand_id
 * @property string $name
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 */
	class Series {}
}

namespace {
/**
 * An Eloquent Model: 'User'
 *
 * @property integer $id
 * @property string $email
 * @property string $password
 * @property string $name
 * @property string $company_name
 * @property boolean $is_admin
 * @property \Carbon\Carbon $created_at
 * @property \Carbon\Carbon $updated_at
 * @property \Carbon\Carbon $deleted_at
 */
	class User {}
}

