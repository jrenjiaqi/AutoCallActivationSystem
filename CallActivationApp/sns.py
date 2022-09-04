from pipes import Template
import boto3

ses = boto3.client('ses')

# send emails.
status_code = ses.send_templated_email (
    Source = 'jrenjqgithub@gmail.com',
    Destination = {
        'ToAddresses': ['jren9982@gmail.com'],
        'CcAddresses': ['jren3321@gmail.com']
    },
    ReplyToAddresses = ['jren9982@gmail.com'],
    Template = 'Jren',
    TemplateData = '{"replace tag name": "with value"}'
)
print(status_code)

# verifying email address.
# ses.verify_email_address(
#     EmailAddress = 'jrenjqgithub@gmail.com'
# )

# listing identities.
# identities = ses.list_identities(
#     IdentityType = 'EmailAddress'
# )
# print(identities)

# creating email template.
# ses.create_template(
#     Template = {
#         'TemplateName': 'Jren',
#         'SubjectPart': 'Threat Detected!',
#         'TextPart': 'A threat has been detected! Please follow up as per threat detection protocol.',
#         'HtmlPart': 'A threat has been detected! Please follow up as per threat detection protocol.'
#     }
# )

# retrieving email template.
# template = ses.get_template(TemplateName = 'Jren')
# print(template)

# list email templates.
# templates = ses.list_templates()
# print(templates)