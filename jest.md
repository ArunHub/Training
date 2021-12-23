# Important things to connect with Jest

 - test runner
 - to use mock -> create __ __mocks__ __ folder(without dash space) and create files inside it.
 - node modules can be mocked straight away as we import . if library that we mock is in subfolder, give the path exactly as  same.
 - write any test with extension [name].test.js
 - jest cli, jest community is available 
 - dash dash (--) is the alternate of jest command. dash dash watch dash dash coverage
 - add npm scripts in package.json - > "test": "jest --watch",
 - add npm scripts in package.json - > "coverage": "jest --watch --coverage",
 - To run only one test with Jest, temporarily change that test command to a test.only inside a describe block in one file
 - press i for Interactive Snapshot Mode. Once you enter Interactive Snapshot Mode, Jest will step you through the failed snapshots one test at a time and give you the opportunity to review the failed output.
 - press u to update failed snapshots
 - You can even update the snapshots with --updateSnapshot or using the u key in --watch mode.
 
**stopped at userouter query null error.**
came to find out that jest is runner and enzyme/react testing library is assertion library. so mocking and rendering react components cannot be done by jest. react testing library is built top on testing library. jest is just testing javascript functions , mocks, after , before each and all.
jest is used to have limits but it used to run the test in a file.

testing library is for finding js dom in the document.

i tried mocking node modules and replicated as mentioned in jest and able to acheiving in userouter mock

now im not able to render resourcelist component. i have to try out beforeeach for axios call



    const HelloWorld = () => <h1>Hello World</h1>
    const {debug} = render(<HelloWorld />)
    debug()

when i tried to debug above component. it shows the result as 

    <div>
    <h1>Hello World</h1>
    </div>

but my component has polaris component so it has many lines.

    const { debug, container } = render(
          <Base>
            <Addons data={props.data} />
          </Base>
        );
    const maxLengthToPrint = 10000;
    debug(container, maxLengthToPrint);

now i was able to get the result. and find out wondering why resourselist polaris component was not rendered.



https://stackoverflow.com/questions/55181009/jest-react-testing-library-warning-update-was-not-wrapped-in-act?rq=1
https://stackoverflow.com/questions/60115885/how-to-solve-the-update-was-not-wrapped-in-act-warning-in-testing-library-re
https://kentcdodds.com/blog/fix-the-not-wrapped-in-act-warning

## react testing library

**to debug and print the required lines**
 - const { debug, container, unmount } =  render()
 - const  maxLengthToPrint  =  11000;
 - debug(container, maxLengthToPrint);
