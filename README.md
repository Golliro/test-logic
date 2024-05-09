.
├── Dockerfile
├── README.md
├── config
│   └── config.json
├── docker-compose.yml
├── generate-migrations.ts
├── migrations
│   ├── 00000001-create_data_base1.js
│   ├── 00000002-update_database_cloumn.js
│   ├── 00000003-update_database_cloumn_sale_name.js
│   ├── 00000004-alter_reequest.js
│   ├── 00000005-update.js
│   ├── 00000006-update.js
│   ├── 00000007-update_channel.js
│   ├── 00000008-update_leads_change_product_id.js
│   ├── 00000009-add_product_column.js
│   ├── 00000010-update_users.js
│   ├── 00000011-remove_user.js
│   ├── 00000012-renew_table_user.js
│   ├── 00000013-add_new_user_column.js
│   ├── 00000014-add_product_on_request_model.js
│   ├── 00000015-remove_unused_column.js
│   ├── 00000016-fix_wrong_receipt.js
│   ├── script.sql
│   └── seed.sql
├── myjson.json
├── nest-cli.json
├── package-lock.json
├── package.json
├── project_structure.txt
├── seeders
│   └── 20240229080741-add-leads.js
├── src
│   ├── app
│   │   └── app.module.ts
│   ├── app.controller.spec.ts
│   ├── configs
│   ├── constants
│   │   ├── dynamoDB-table.ts
│   │   ├── payment-status.ts
│   │   └── request-constants.ts
│   ├── decorators
│   │   └── user.decorator.ts
│   ├── dynamo-entities
│   ├── entities
│   │   ├── activities.entity.ts
│   │   ├── business-types.entity.ts
│   │   ├── channels.entity.ts
│   │   ├── esr.entity.ts
│   │   ├── installment.entity.ts
│   │   ├── leads.entity.ts
│   │   ├── organization.entity.ts
│   │   ├── payment-receive.entity.ts
│   │   ├── payment.entity.ts
│   │   ├── product-model.entity.ts
│   │   ├── product.entity.ts
│   │   ├── request-model.entity.ts
│   │   ├── request-organization.entity.ts
│   │   ├── request-package.entity.ts
│   │   ├── request-user.entity.ts
│   │   ├── request.entity.ts
│   │   ├── sale.entity.ts
│   │   └── user.entity.ts
│   ├── helpers
│   ├── interceptors
│   │   └── transform.interceptor.ts
│   ├── libs
│   │   ├── dayjs-lib.ts
│   │   ├── dynamodb-lib.ts
│   │   ├── nodemailer-lib.ts
│   │   └── secret-manager-lib.ts
│   ├── main.ts
│   ├── migration
│   ├── modules
│   │   ├── admin
│   │   │   ├── admin.module.ts
│   │   │   ├── app.controller.ts
│   │   │   ├── app.dto.ts
│   │   │   └── app.service.ts
│   │   ├── auth
│   │   │   ├── auth.config.ts
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.module.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── dto
│   │   │   │   └── auth.dto.ts
│   │   │   └── jwt.strategy.ts
│   │   ├── esr
│   │   │   ├── app.controller.ts
│   │   │   ├── app.dto.ts
│   │   │   ├── app.service.ts
│   │   │   ├── esr.module.ts
│   │   │   └── payment.providers.ts
│   │   ├── general-admin
│   │   │   ├── app.controller.ts
│   │   │   ├── app.dto.ts
│   │   │   ├── app.service.ts
│   │   │   └── general-admin.module.ts
│   │   ├── leads
│   │   │   ├── leads.controller.ts
│   │   │   ├── leads.dto.ts
│   │   │   ├── leads.module.ts
│   │   │   └── leads.service.ts
│   │   ├── organization
│   │   │   ├── helpers
│   │   │   │   ├── mill-create.helper.ts
│   │   │   │   ├── mill-processForm.helper.ts
│   │   │   │   ├── mill-rerational.helper.ts
│   │   │   │   ├── mill-role.helper.ts
│   │   │   │   └── mill.helper.ts
│   │   │   ├── organization.controller.ts
│   │   │   ├── organization.dto.ts
│   │   │   ├── organization.helper.ts
│   │   │   ├── organization.module.ts
│   │   │   └── organization.service.ts
│   │   ├── payment
│   │   │   ├── payment.controller.ts
│   │   │   ├── payment.dto.ts
│   │   │   ├── payment.helper.ts
│   │   │   ├── payment.module.ts
│   │   │   ├── payment.providers.ts
│   │   │   └── payment.service.ts
│   │   ├── payment-receive
│   │   │   ├── payment-receive.controller.ts
│   │   │   ├── payment-receive.dto.ts
│   │   │   ├── payment-receive.helper.ts
│   │   │   ├── payment-receive.module.ts
│   │   │   ├── payment-receive.providers.ts
│   │   │   └── payment-receive.service.ts
│   │   ├── product
│   │   │   ├── helpers
│   │   │   │   ├── model-create.helper.ts
│   │   │   │   ├── model.helper.ts
│   │   │   │   ├── notification.helper.ts
│   │   │   │   ├── package-create.helper.ts
│   │   │   │   ├── package.helper.ts
│   │   │   │   ├── user-create.helper.ts
│   │   │   │   └── user.helper.ts
│   │   │   ├── m0
│   │   │   │   ├── app.controller.ts
│   │   │   │   ├── app.dto.ts
│   │   │   │   ├── app.service.ts
│   │   │   │   ├── m0.helper.ts
│   │   │   │   └── m0.module.ts
│   │   │   ├── mp
│   │   │   │   ├── app.controller.ts
│   │   │   │   ├── app.dto.ts
│   │   │   │   ├── app.service.ts
│   │   │   │   ├── mp.helper.ts
│   │   │   │   └── mp.module.ts
│   │   │   └── product.module.ts
│   │   ├── request
│   │   │   ├── app.controller.ts
│   │   │   ├── app.dto.ts
│   │   │   ├── app.service.ts
│   │   │   ├── request.module.ts
│   │   │   └── request.providers.ts
│   │   ├── upload
│   │   │   ├── dto
│   │   │   │   ├── create-upload.dto.ts
│   │   │   │   └── update-upload.dto.ts
│   │   │   ├── upload.controller.spec.ts
│   │   │   ├── upload.controller.ts
│   │   │   ├── upload.module.ts
│   │   │   ├── upload.service.spec.ts
│   │   │   └── upload.service.ts
│   │   └── user
│   │       ├── user.dto.ts
│   │       ├── user.module.ts
│   │       └── user.service.ts
│   ├── tasks
│   │   ├── check-ma
│   │   │   └── check-ma.service.ts
│   │   ├── check-payment
│   │   │   └── check-payment.service.ts
│   │   ├── task.module.ts
│   │   └── tasks.service.ts
│   └── utils
│       └── calss-extend.ts
├── swagger.json
├── template.env
├── test
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── tsconfig.build.json
├── tsconfig.json
├── tsconfig.paths.json
└── yarn.lock