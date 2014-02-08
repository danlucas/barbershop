# Barbershop App Plan

This is just a quick plan to get organized.  I have no plans on doing all of this, this is just ideas really, but I writing things out as if I 

## Models

Barbers
- name
- specialties
- pictures

Customers
- name
- favorite barber
- orders (order they've had in the past)
- phone number

## views

Appointments

For customers to review their upcoming appointment

- keys off customer id
- displays appointment time, barber, and order

Reservations

For barbers to see their daily appointments

- keys off barber id
- display every appointment by day
- displays customer name, appointment time, order

staff

- list of barbers and their specialties
- pictures if I get bored

Services & Products

- list of services (need a model?)
- list of products (stuff the shop sells, unrelated to any barber)

Promotions

- list of current promotions
- seperating out because we should be able to put it on any page, especially the front page

## pages that don't really need their own models

* about us
* store info (unless the open time changes frequently).