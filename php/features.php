<?php
declare(strict_types=1);

// FederalRegister SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class FederalRegisterFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new FederalRegisterBaseFeature();
            case "test":
                return new FederalRegisterTestFeature();
            default:
                return new FederalRegisterBaseFeature();
        }
    }
}
