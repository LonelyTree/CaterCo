


# Arrival Page

Page has links to:

Preview Page
Login Page
Logout Page


CRUD applications:

POST= none

GET=    Login Page
        Logout Page
        Preview Page

PUT= none
DELETE= none

Controllers: Done

# Login Page

Has links to:

Main Page
Admin Menu Page


CRUD applications:

POST= New User Schema

GET=    Main Page
        Admin Menu Page

PUT= none
DELETE= none

Controllers: Not Done

### USER ###


# Main Page

Has links to:

Confirm Page
Edit Account Page
Logout Page
New Order Page


CRUD applications:

POST= none

GET=    Confirm Page,
        Edit Account Page
        Logout Page
        New Order Page

PUT=
DELETE=


Controllers: Not Done

# New Order Page:

Has links to:

Confirm Page
Edit Account Page
Logout Page
Main Page


CRUD applications:

POST= New Food Schema

GET=    Food Schema,
        Confirm Page,
        Edit Account Page,
        Logout Page,
        Main Page

PUT=New Food Schema
DELETE=New Food Schema


Controllers: Not Done

# Confirm Page

Has links to:

Thank You Page
Edit Account Page
Logout Page


CRUD applications:

POST=none

GET=    user.Orders
        Thank You Page
        Edit Account Page
        Logout Page

PUT=    user.Orders
DELETE= user.Orders

Controllers: Not Done

# Thank You Page

Has links to:

Main Menu Page
Edit Account Page
Logout Page


CRUD applications:

POST= none

GET=    Main Menu Page
        Edit Account Page
        Logout Page

PUT= none
DELETE= none

Controllers: Not Done


### NAV ###


# Edit Menu Page

Has links to:

Edit Info Page
Edit Orders Page
Logout Page


CRUD applications:

POST= none

GET=    Edit Info Page
        Edit Orders Page
        Logout Page

PUT= none
DELETE= none

Controllers: Not Done

# Edit Info Page

Has links to:

Edit Menu Page
Main Menu
Logout Page


CRUD applications:

POST= none

GET=    user
        Edit Info Page
        Edit Orders Page
        Logout Page

PUT=    user.username
        user.password
        user.payment
        user.email

DELETE= user


Controllers: Not Done

# Edit Orders Page


Has links to:

Edit Menu Page
Main Menu
Logout Page


CRUD applications:

POST= none

GET=    user.orders
        Edit Menu Page
        Main Menu
        Logout Page

PUT= user.orders
DELETE= user.orders


Controllers: Not Done

### ADMIN ###


# Admin Menu Page

Has links to:

Edit Services Page
Edit Users Page
Logout Page


CRUD applications:

POST= none

GET=    Edit Services Page
        Edit Users Page
        Logout Page

PUT= none
DELETE= none


Controllers: Not Done

# Edit Services Page

Has links to:

Admin Menu Page
Logout Page


CRUD applications:

POST= food

GET=    food
        Admin Menu Page
        Logout Page

PUT= food
DELETE= food


Controllers: Not Done

# Edit Users Page

Has links to: 

Admin Menu Page
Edit User Menu Page
Logout Page


CRUD applications:

POST= none

GET=    user
        Admin Menu Page
        Edit User Menu Page
        Logout Page

PUT= user

DELETE= user


Controllers: Not Done