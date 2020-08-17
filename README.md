## Vigtory String Compressor

### Step 1
Write a function to compress the following strings by tallying and removing duplicate chars. All words will consist of letters from the alphabet. The output should be case sensitive. The compression should be reversible -- no information should be lost.

EXAMPLE:
aabDaaa -> a2b1D1a3
bbgAaffff -> b2g1A1a1f4
zzAAsS -> z2A2s1S1

### Step 2
Integrate the compression function into the react application, taking the input from the input textbox and compressing it once the user clicks the "Compress" button.

### Step 3
Create a de-compress button that allows the user to input a compressed string into the output textbox and de-compress the text into the input textarea.

### Cleanup
Navigate to the parent directory of this project and run
```
zip -r myCode.zip ./string-compressor -x \*/node_modules/\*
```
to zip up your work, and send it to `michael@betvigtory.com`.