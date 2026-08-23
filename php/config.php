<?php
declare(strict_types=1);

// FederalRegister SDK configuration

class FederalRegisterConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "FederalRegister",
                "slug" => "federal-register",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://www.federalregister.gov/api/v1",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "document" => [],
                ],
            ],
            "entity" => [
        'document' => [
          'fields' => [
            [
              'name' => 'abstract',
              'short' => 'Brief summary of the document',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'action',
              'short' => 'Action being taken by the document',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'agencies',
              'short' => 'Agencies associated with the document',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'body_html_url',
              'short' => 'URL to the full HTML body of the document',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'citation',
              'short' => 'Official citation for the document',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'document_number',
              'short' => 'Unique identifier for the document',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'full_text_xml_url',
              'short' => 'URL to the full text XML of the document',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'html_url',
              'short' => 'URL to the document on FederalRegister.gov',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'pdf_url',
              'short' => 'URL to the PDF version of the document',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'publication_date',
              'short' => 'Date the document was published',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'signing_date',
              'short' => 'Date the document was signed',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'title',
              'short' => 'Title of the document',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'topics',
              'short' => 'Topics associated with the document',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'type',
              'short' => 'Type of document',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'document',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => [
                          'environmental-protection-agency',
                        ],
                        'kind' => 'query',
                        'name' => 'conditions_agency',
                        'orig' => 'conditions_agency',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'example' => '2021-01-01',
                        'kind' => 'query',
                        'name' => 'conditions_publication_date_gte',
                        'orig' => 'conditions_publication_date_gte',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '2021-12-31',
                        'kind' => 'query',
                        'name' => 'conditions_publication_date_lte',
                        'orig' => 'conditions_publication_date_lte',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 2021,
                        'kind' => 'query',
                        'name' => 'conditions_publication_date_year',
                        'orig' => 'conditions_publication_date_year',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 'climate change',
                        'kind' => 'query',
                        'name' => 'conditions_term',
                        'orig' => 'conditions_term',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => [
                          'RULE',
                        ],
                        'kind' => 'query',
                        'name' => 'conditions_type',
                        'orig' => 'conditions_type',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'example' => [
                          'title',
                          'publication_date',
                          'document_number',
                        ],
                        'kind' => 'query',
                        'name' => 'field',
                        'orig' => 'field',
                        'type' => '`$ARRAY`',
                      ],
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'newest',
                        'kind' => 'query',
                        'name' => 'order',
                        'orig' => 'order',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 1,
                        'kind' => 'query',
                        'name' => 'page',
                        'orig' => 'page',
                        'type' => '`$INTEGER`',
                      ],
                      [
                        'example' => 20,
                        'kind' => 'query',
                        'name' => 'per_page',
                        'orig' => 'per_page',
                        'type' => '`$INTEGER`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/documents',
                  'parts' => [
                    'documents',
                  ],
                  'select' => [
                    'exist' => [
                      'conditions_agency',
                      'conditions_publication_date_gte',
                      'conditions_publication_date_lte',
                      'conditions_publication_date_year',
                      'conditions_term',
                      'conditions_type',
                      'field',
                      'format',
                      'order',
                      'page',
                      'per_page',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.results`',
                  ],
                ],
              ],
            ],
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'example' => '2021-12345',
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'document_number',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                    'query' => [
                      [
                        'example' => 'title,publication_date,agencies',
                        'kind' => 'query',
                        'name' => 'field',
                        'orig' => 'field',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/documents/{document_number}',
                  'parts' => [
                    'documents',
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'document_number' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'field',
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return FederalRegisterFeatures::make_feature($name);
    }
}
