<?php
declare(strict_types=1);

// FederalRegister SDK exists test

require_once __DIR__ . '/../federalregister_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = FederalRegisterSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
