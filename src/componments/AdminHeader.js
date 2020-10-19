import React from 'react'

function AdminHeader(){
 return(
   
<div classNames="sidebar">
    <div classNames="sidebar-wrapper">
        <div classNames="logo">
            <a href="#" classNames="simple-text logo-mini">BD</a>
            <a href="#" classNames="simple-text logo-normal">Black Dashboard</a>
        </div>
        <ul class="nav">
            {/* <li @if ($pageSlug ?? '' == 'dashboard') classNames="active " @endif> */}
{/* // {{--                <a href="{{ route('home') }}">--}} */}
                    <i class="tim-icons icon-chart-pie-36"></i>
                    <p>Dashboard</p>
                {/* </a> */}
            {/* </li> */}
            <li>
                <a data-toggle="collapse" href="#laravel-examples" aria-expanded="true">
                    <i class="fab fa-laravel" ></i>
                    <span class="nav-link-text" >Laravel Examples</span>
                    <b class="caret mt-1"></b>
                </a>

                <div class="collapse show" id="laravel-examples">
                    <ul class="nav pl-4">
                        {/* <li @if ($pageSlug ?? '' == 'profile') class="active " @endif> */}
{/* {{--                            <a href="{{ route('profile.edit')  }}">--}} */}
                                <i class="tim-icons icon-single-02"></i>
                                <p>User Profile</p>
                            {/* </a>
                        </li> */}
                        {/* <li @if ($pageSlug ?? '' == 'users') class="active " @endif>
{{--                            <a href="{{ route('user.index')  }}">--}} */}
                                <i class="tim-icons icon-bullet-list-67"></i>
                                <p>User Management</p>
                            {/* </a>
                        </li> */}
                    </ul>
                </div>
            </li>
            {/* <li @if ($pageSlug ?? '' == 'icons') class="active " @endif>
{{--                <a href="{{ route('pages.icons') }}">--}} */}
                    <i class="tim-icons icon-atom"></i>
                    <p>Icons</p>
                {/* </a>
            </li> */}
            {/* <li @if ($pageSlug ?? '' == 'maps') class="active " @endif>
{{--                <a href="{{ route('pages.maps') }}">--}} */}
                    <i class="tim-icons icon-pin"></i>
                    <p>Maps</p>
                {/* </a>
            </li> */}
            {/* {/* <li @if ($pageSlug ?? '' == 'notifications') class="active " @endif>
{{--                <a href="{{ route('pages.notifications') }}">--}}
                    <i class="tim-icons icon-bell-55"></i>
                    <p>{{ __('Notifications') }}</p>
                </a>
            </li>
            <li @if ($pageSlug ?? '' == 'users') class="active " @endif>
                <a href="{{ route('users') }}">
                    <i class="tim-icons icon-puzzle-10"></i>
                    <p>{{ __('Users') }}</p>
                </a>
            </li>
            <li @if ($pageSlug ?? '' == 'typography') class="active " @endif>
{{--                <a href="{{ route('pages.typography') }}">--}}
                    <i class="tim-icons icon-align-center"></i>
                    <p>{{ __('Typography') }}</p>
                </a>
            </li>
            <li @if ($pageSlug ?? '' == 'rtl') class="active " @endif>
{{--                <a href="{{ route('pages.rtl') }}">--}}
                    <i class="tim-icons icon-world"></i>
                    <p>{{ __('RTL Support') }}</p>
                </a>
            </li>
            <li class=" {{ $pageSlug ?? '' == 'upgrade' ? 'active' : '' }} bg-info">
{{--                <a href="{{ route('pages.upgrade') }}">--}}
                    <i class="tim-icons icon-spaceship"></i>
                    <p>{{ __('Upgrade to PRO') }}</p>
                </a>
            </li> */}
      </ul>
    </div>
    </div>

 )
}
export default AdminHeader
