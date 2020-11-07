<?php

namespace App;

use App\Notifications\MailResetPasswordNotification;
use App\Notifications\VerifyEmail;
use GoldSpecDigital\LaravelEloquentUUID\Database\Eloquent\Uuid;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany as BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Laravel\Passport\HasApiTokens;

/**
 * @method static findOrFail($id)
 * @method static latest()
 * @method find($id)
 * @method static create(array $array)
 * @method static select(string $string, $raw)
 * @method static where(string $string, string $string1, string $string2)
 * @property mixed email
 * @property mixed firstName
 * @property mixed lastName
 * @property mixed pinCode
 * @property mixed phone
 * @property mixed country
 * @property mixed isAdmin
 * @property mixed isManager
 * @property mixed company_id
 * @property mixed|string password
 * @property mixed avatar
 * @property mixed position_id
 */
class Inventory extends Model
{
    use Uuid;
    use SoftDeletes;

    protected $dates = ['deleted_at'];

    public $incrementing = false;
    protected $keyType = 'string';
    protected $guarded = [];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'no_facture', 'pay', 'company_id','payment_id','supplier_id'
    ];

    /**
     * @return BelongsTo
     */
    public function company(): BelongsTo
    {
        return $this->belongsTo(Company::class);
    }

    public function payments(): HasOne
    {
        return $this->hasOne(Payment::class);
    }

    public function supplier(): HasOne
    {
        return $this->hasOne(Supplier::class);
    }

    public function articles_shops():HasMany
    {
        return $this->hasMany(InventoriesArticlesShops::class)
            ->with('articles_shops');
    }

    public function taxes(): BelongsToMany
    {
        return $this->belongsToMany(Tax::class,'inventories_tax');
    }

}
