### Problem Statement

You have to design 2 screens in which user can enter mobile number and we can verify

### Screen-1: Mobile Number Screen

### Screen-2: OTP Verification Screen

### Screen-3: Success Screen (Optional, You can show the success message on screen-2 itself)

Here is the workflow of whole process
• Screen 1: Enter Mobile Number (and change country if required)
• Click on “Send OTP”
• A random OTP should be generated via a REST-API
• Screen 2: Ask for OTP
• Enter OTP number by number (Here you can show OTP generated via REST-API on screen via a
snackbar(on screen notification))
• Click on “Verify OTP”
• Verify the OTP via REST-API
• Success - Screen 3 / Failure Snackbar(on screen notification)
~ Added challenge: Try to send OTP to the actual number instead of mocking it on screen by using
some free service.[Totally Optional]
Sample Design:
Design:

### https://www.figma.com/file/NW3SHq44yjrP0m54WL8Nwo/Login_dev?node-id=0%3A1

Try to match the design as close as possible
