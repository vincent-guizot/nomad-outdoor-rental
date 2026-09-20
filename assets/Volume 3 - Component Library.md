# NOMAD UI DESIGN BIBLE

## Volume 3 — Component Library (v1.0)

**Project:** Nomad Outdoor Gear Platform

**Document Type:** Component Library

**Purpose:**
This document defines every reusable UI component used across the Nomad ecosystem. Every page should be assembled from these standardized components to ensure visual consistency, maintainability, scalability, and a premium user experience.

---

# Component Philosophy

Every component should follow these principles:

• Reusable
• Accessible
• Minimal
• Consistent
• Responsive
• Premium
• Easy to Scan
• Photography First

Components should never compete for attention.

Whitespace is part of every component.

Animations should enhance usability rather than distract users.

---

# 1. Sidebar

Purpose

Primary navigation.

Layout

Fixed Left Sidebar

Width

280px

Background

Deep Forest Green (#1F3A2E)

Radius

None

Padding

32px

Logo

Top Left

Menu Items

• Home
• Shop
• Categories
• Rent
• Collections
• Journal
• Transactions
• About

Bottom Navigation

• Wishlist
• Notifications
• Cart
• Profile

Interaction

Hover

Background becomes Olive.

Active Item

Forest Green Pill

Icon

Lucide Icons

Animation

200ms Fade + Slide

---

# 2. Top Navigation

Purpose

Secondary navigation and quick actions.

Contains

Search

Notifications

Wishlist

Profile

Cart

Responsive

Hidden on Mobile

Drawer Navigation replaces it.

---

# 3. Hero Banner

Purpose

Introduce major content.

Layout

Split Layout

Large Photography

Left Content

Right Photography

Contains

Headline

Description

CTA

Secondary CTA

Statistics

Image

Mountain

Forest

Camping

Lakes

Height

500–650px

---

# 4. Search Bar

Rounded

Large

Placeholder

"Search outdoor gear..."

Contains

Search Icon

Voice Search (Future)

Filter Button

---

# 5. Category Card

Contains

Image

Title

Description

Product Count

CTA

Radius

20px

Hover

Lift

Scale

Image Zoom

---

# 6. Product Card

Contains

Product Image

Category

Name

Rating

Price

Favorite Button

Buy Button

Rent Button

Availability Badge

Hover

Shadow Increase

Image Zoom

Button Fade

---

# 7. Featured Product Card

Larger version of Product Card.

Includes

Large Photography

Feature Icons

Specifications

CTA

---

# 8. Collection Card

Large Lifestyle Image

Collection Name

Description

Explore Button

Minimal Overlay

---

# 9. Rental Card

Equipment Image

Rental Price

Duration

Availability

CTA

Deposit

Hover

Lift Animation

---

# 10. Journal Card

Landscape Image

Category

Reading Time

Title

Summary

Author

Publish Date

Continue Reading

---

# 11. Journal Featured Card

Large Hero Image

Headline

Author

Estimated Reading Time

CTA

Used on Journal Landing Page.

---

# 12. Statistics Card

Icon

Title

Number

Description

Used for

Orders

Rentals

Reviews

Trips

Points

---

# 13. Feature Card

Small Illustration/Icon

Headline

Description

Used in Home Page

About Page

Landing Page

---

# 14. Testimonial Card

Avatar

Name

Location

Rating

Review

Clean White Card

---

# 15. Adventure Story Card

Large Photography

Title

Destination

Duration

CTA

---

# 16. Order Summary Card

Subtotal

Shipping

Rental Fee

Discount

Tax

Total

Checkout Button

---

# 17. Payment Card

Payment Method

Card Logo

Status

Primary Button

Security Notice

---

# 18. Transaction Card

Order Number

Status

Thumbnail

Products

Price

Date

View Details Button

Download Invoice

---

# 19. Timeline Component

Used For

Rental Status

Order Tracking

Shipping

Returns

Contains

Timeline Dot

Connector

Date

Status

Description

---

# 20. Availability Calendar

Monthly Calendar

Booked Dates

Available Dates

Holiday Indicator

Rental Duration Selection

---

# 21. Review Card

Avatar

Username

Rating

Review

Images

Date

Verified Badge

---

# 22. FAQ Accordion

Title

Expandable Content

Chevron Animation

Single Open Mode

---

# 23. Newsletter Section

Large Background Image

Heading

Description

Email Input

Subscribe Button

Privacy Text

---

# 24. CTA Banner

Large Photography

Title

Description

Primary Button

Secondary Button

---

# 25. Breadcrumb

Home

>

Category

>

Product

Minimal

Small Text

---

# 26. Pagination

Previous

Pages

Next

Rounded Buttons

---

# 27. Badge

Variants

Success

Warning

Error

Info

Neutral

Rounded Pill

---

# 28. Tag

Small

Rounded

Filled

Used for

Camping

Hiking

New

Popular

Premium

Limited

---

# 29. Avatar

Circle

32

40

48

64

Supports

Image

Fallback Initials

Status Badge

---

# 30. Rating Component

5 Stars

Half Stars

Review Count

Average Score

---

# 31. Progress Bar

Rental Progress

Shipping Progress

Upload Progress

Animated Fill

---

# 32. Tabs

Rounded

Minimal

Underline Active State

Used for

Shop

Transactions

Journal

Profile

---

# 33. Filter Panel

Categories

Brands

Price Range

Rating

Availability

Rental

Reset Button

Apply Button

Desktop

Sticky Sidebar

Mobile

Drawer

---

# 34. Sort Dropdown

Newest

Popular

Price Low to High

Price High to Low

Highest Rated

Recommended

---

# 35. Empty State

Illustration

Minimal Icon

Title

Description

CTA

Examples

No Orders

No Rentals

No Wishlist

No Notifications

---

# 36. Loading Skeleton

Cards

Images

Buttons

Tables

Timeline

Use subtle shimmer animation.

---

# 37. Toast Notification

Success

Warning

Error

Information

Top Right

Auto Close

---

# 38. Modal

Rounded

24px Radius

Soft Shadow

Backdrop Blur

Primary Action

Secondary Action

---

# 39. Drawer

Slide From Right

Used For

Cart

Filters

Notifications

Wishlist

Profile

---

# 40. Footer

Contains

Logo

Navigation

Newsletter

Social Links

Copyright

Background

Deep Forest

---

# 41. Floating Action Button (Optional)

Mobile Only

Quick Chat

Support

Emergency Contact

---

# 42. Image Gallery

Main Image

Thumbnail Gallery

Zoom

Fullscreen

Swipe Support

---

# 43. Product Specification Table

Weight

Material

Capacity

Waterproof Rating

Dimensions

Warranty

---

# 44. Related Products Carousel

Horizontal Scroll

4 Cards Desktop

2 Tablet

1 Mobile

---

# 45. Destination Showcase

Large Photography

Location

Difficulty

Elevation

Estimated Time

Recommended Gear

---

# 46. Community Highlights

User Photos

Stories

Events

Featured Explorers

---

# 47. Rental Checklist

Tent

Sleeping Bag

Cooking Kit

Chair

Lantern

Backpack

Checklist Style

---

# 48. Notification Item

Icon

Title

Message

Timestamp

Unread Indicator

---

# 49. Profile Card

Avatar

Name

Membership

Points

Trips

Quick Actions

---

# 50. Component States

Every interactive component must support:

Default

Hover

Focus

Active

Disabled

Loading

Success

Error

Empty

Responsive

Dark Mode Ready

---

# Motion Rules

Hover

Scale 1.02

200ms

Image Zoom

1.05

Button Ripple

Subtle

Cards

Lift 4px

Drawer

Slide Right

Modal

Fade + Scale

Sidebar

Slide

Page Transition

Fade

---

# Accessibility Rules

Minimum Click Area

44px

Visible Focus State

Keyboard Navigation

ARIA Labels

High Contrast

Screen Reader Friendly

Semantic HTML

---

# Responsive Behavior

Desktop

Sidebar Fixed

Tablet

Sidebar Collapsible

Mobile

Drawer Navigation

Cards

Desktop

4 Columns

Tablet

2 Columns

Mobile

1 Column

---

# Component Naming Convention

Layout/

Sidebar

Navbar

Footer

Hero

Components/

Button

Input

Card

Badge

Tag

Avatar

Modal

Drawer

Navigation/

Breadcrumb

Pagination

Tabs

Dropdown

Commerce/

ProductCard

RentalCard

OrderSummary

PaymentCard

TransactionCard

Timeline

Content/

JournalCard

ReviewCard

FAQ

Newsletter

CTA

Utility/

Skeleton

Toast

EmptyState

Loading

---

# Volume 3 Deliverables

This Component Library defines every reusable building block used throughout the Nomad platform.

Every page in future volumes must be assembled exclusively from these standardized components.

The next documents will focus on how these components are combined into complete user experiences:

Volume 4 — Core Pages

Volume 5 — Commerce Flow

Volume 6 — Content Experience

Volume 7 — Motion & UX

Volume 8 — Master Google Stitch Prompt

Following this Component Library ensures the entire Nomad ecosystem feels cohesive, scalable, maintainable, and visually consistent across all pages.
