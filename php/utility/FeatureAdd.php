<?php
declare(strict_types=1);

// FederalRegister SDK utility: feature_add

class FederalRegisterFeatureAdd
{
    public static function call(FederalRegisterContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
