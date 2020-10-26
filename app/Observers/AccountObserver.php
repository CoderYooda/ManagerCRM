<?php

namespace App\Observers;

use App\Models\Account;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Artisan;

class AccountObserver
{
    /**
     * Handle the account "created" event.
     *
     * @param  \App\Models\Account  $account
     * @return void
     */
    public function created(Account $account)
    {
        DB::connection('mysql')->statement("CREATE DATABASE " . $account->db_name);

        Config::set('database.connections.mysql.database', $account->db_name);

        DB::purge('mysql');
        DB::reconnect('mysql');

        Artisan::call('migrate --path=database/migrations/pattern');
    }

    /**
     * Handle the account "updated" event.
     *
     * @param  \App\Models\Account  $account
     * @return void
     */
    public function updated(Account $account)
    {
        //
    }

    /**
     * Handle the account "deleted" event.
     *
     * @param  \App\Models\Account  $account
     * @return void
     */
    public function deleted(Account $account)
    {
        //
    }

    /**
     * Handle the account "restored" event.
     *
     * @param  \App\Models\Account  $account
     * @return void
     */
    public function restored(Account $account)
    {
        //
    }

    /**
     * Handle the account "force deleted" event.
     *
     * @param  \App\Models\Account  $account
     * @return void
     */
    public function forceDeleted(Account $account)
    {
        //
    }
}
