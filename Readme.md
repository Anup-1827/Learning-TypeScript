1. TypeScript extends JS
2. TypeScript is mentioned by Microsoft
3. <em>tsc</em> command is that runs typescript
4. tsc will run in the terminal if typescript is installed globally
5. <b>tsc -v</b> to know the version of the typescript
6. <b>tsconfig.json</b> is used to configure typescipt
<br/>
<code>
    {
        "compilerOption": {
            "allowJs": true,
            "checkJs": true,
            "outDir":"build", 
            "target":"ES6" | "esnext",
            "noEmit" : true
        }, 
        "include": ["scr/**/*"]
    }
</code> 
<ul>
<li>OutDir:- build --> New Folder will be created that has all the compiled JS file from JS </li>
<li>target:- default "ES3" | "ES6" or "esnext"</li>
<li>noEmit:- true --> Allows type script to only allow <b>type-checking</b>. It prevents typescript to compile code into JS. This make room for other another tool like <em>Bable</em>and<em>swc</em> to convert TypeScript into a file which can run inside JS environment</li>
<li><em>"checkJs": true</em>--> Allows type checking in JS file</li>
<li><em>"allowJs": true</em>--> Allows to add JS file in side JS file with any extension of .ts ot .tsx file</li>
<li></li>
<!-- <li></li> -->
</ul>

7. After compilation the JS code created is the optimized code remove uncessary varaibles and methods 
8. All JS is a valid typescript file
9. Interface are custom type which is only used for type checking during compilation and is never used in run time environment
10. <b><em>extends</em></b> keyword is used to extend the interface of other type
11. <b>Alias</b> is used alias for any data type
12. <b>enum</b> is a type used for the field which can have value only in the provided set
13. <b>Partial</b> keyword add property to our type as optional
14. <b>Omit</b> keyword allows us to omit certain properties from defined type. It takes two parameter, first in the type and second is the properties to be omitted from the type <em>Omit<\AddressType, "line2" | "pincode"></em>
15. <b>Pick</b> is used to pick the particular property of any type  
16. <b>Required</b> is used to make all properties compulsary
17.s