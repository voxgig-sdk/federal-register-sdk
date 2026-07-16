<?php
declare(strict_types=1);

// FederalRegister SDK base feature

class FederalRegisterBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(FederalRegisterContext $ctx, array $options): void {}
    public function PostConstruct(FederalRegisterContext $ctx): void {}
    public function PostConstructEntity(FederalRegisterContext $ctx): void {}
    public function SetData(FederalRegisterContext $ctx): void {}
    public function GetData(FederalRegisterContext $ctx): void {}
    public function GetMatch(FederalRegisterContext $ctx): void {}
    public function SetMatch(FederalRegisterContext $ctx): void {}
    public function PrePoint(FederalRegisterContext $ctx): void {}
    public function PreSpec(FederalRegisterContext $ctx): void {}
    public function PreRequest(FederalRegisterContext $ctx): void {}
    public function PreResponse(FederalRegisterContext $ctx): void {}
    public function PreResult(FederalRegisterContext $ctx): void {}
    public function PreDone(FederalRegisterContext $ctx): void {}
    public function PreUnexpected(FederalRegisterContext $ctx): void {}
}
