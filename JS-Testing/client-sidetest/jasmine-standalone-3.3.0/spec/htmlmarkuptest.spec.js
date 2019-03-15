// 1. test case for html
// 2. spy on events based on jquery selector
// 3. trigger events those are spied

describe('HTML-DOM-Test', function () {
    var spyEvent;
    // load the fixture before the testcase is called
    beforeEach(function () {
        setUpHtmlDomFixture();
    });

    // the test case will spy on event and trigger it
    it('should trigger the set message click', function () {
        spyEvent = spyOnEvent("#btnset", 'click');
        $("#btnset").trigger("click");
        // define the trigger event of the selector
        // return true if the DOM is subscribed with event
        expect("click").toHaveBeenTriggeredOn("#btnset");
        expect(spyEvent).toHaveBeenTriggered();
    })

    it('should trigger the clear message on click', function () {
        spyEvent = spyOnEvent("#btnclear", 'click');
        $("#btnclear").trigger("click");
        // define the trigger event of the selector
        expect("click").toHaveBeenTriggeredOn("#btnclear");
        expect(spyEvent).toHaveBeenTriggered();
    });

    var message = "Hello Jasmine";
    describe("Event based message check", function () {
        beforeEach(function () {
            setUpHtmlDomFixture();
            $("#txtmsg").val(message);
            $("#btnset").trigger('click');
        });

        it("should check if input element is present", function () {
            expect('<form id="f"><input type="text"/></form>').toContainElement("input[type=text]");
        });

        it("should have same message as per message value", function () {
            expect($("#txtmsg")).toHaveValue("Hello Jasmine");
        });
    });

    describe("Event based message check", function () {
    var mess = "Hello Jasmine";

        beforeEach(function () {
            setUpHtmlDomFixture();
            $("#txtmsg").val(message);
            $("#btnset").trigger('click');
        });

        it("should check if input element is present", function () {
            expect('<form id="f"><input type="text"/></form>').toContainElement("input[type=text]");
        });

        it("should have same message as per message value", function () {
            expect($("#txtmsg")).toHaveValue("Hello Jasmine");
        });
    });
});

