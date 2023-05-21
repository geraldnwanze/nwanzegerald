<?php

namespace App\Enums;

enum UserRoleEnum:string {
    case admin = 'admin';
    case manager = 'manager';
    case user = 'user';
}
