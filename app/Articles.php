<?php

namespace App;

use GoldSpecDigital\LaravelEloquentUUID\Database\Eloquent\Uuid;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Class Articles
 * @package App
 * @method static findOrFail($id)
 * @method static latest()
 * @method find($id)
 * @method static create(array $array)
 * @method static select(string $string, $raw)
 */
class Articles extends Model
{
    use Uuid;

    public $incrementing = false;
    protected $keyType = 'string';
    protected $guarded = [];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'company_id', 'category_id',
    ];

    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function variants(): HasMany
    {
        return $this->hasMany(Variant::class, 'article_id');
    }

    public function images(): HasMany
    {
        return $this->hasMany(ArticleImage::class, 'article_id');
    }

    public function variantValues(): HasMany
    {
        return $this->hasMany(Articles::class, 'parent_id')->with('articlesShops');
    }

    public function articlesShops(): HasMany
    {
        return $this->hasMany(ArticlesShops::class, 'article_id')->with('shops');
    }

    public function composites(): HasMany
    {
        return $this->hasMany(ArticlesComposite::class, 'article_id')->addSelect([
            'articles_name' => self::select('name')
                ->whereColumn('articles_composites.article_id', 'articles.id')
        ])->addSelect([
            'composite_name' => self::select('name')
                ->whereColumn('articles_composites.composite_id', 'articles.id')
        ]);
    }
}
