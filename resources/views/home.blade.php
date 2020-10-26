@extends('layouts.app1')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="panel-body table-responsive">
                <router-view name="companiesIndex"></router-view>
                <router-view></router-view>
            </div>
            <div class="card">
                <div class="card-header">{{ __('Dashboard') }}</div>
                <example-component></example-component>
                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{ __('You are logged in!') }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
