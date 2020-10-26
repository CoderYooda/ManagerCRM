<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;

class Connection
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $account = Auth::user()->account()->first();
        Config::set('database.connections.mysql.database', $account->db_name);

        DB::purge('mysql');
        DB::reconnect('mysql');

        return $next($request);
    }
}
