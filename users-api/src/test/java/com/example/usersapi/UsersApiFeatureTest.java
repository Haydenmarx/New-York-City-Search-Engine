package com.example.usersapi;
import com.codeborne.selenide.CollectionCondition;
import com.codeborne.selenide.Selenide;
import com.example.usersapi.models.User;
import com.example.usersapi.repositories.UserRepository;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static com.codeborne.selenide.Selectors.byText;
import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.Condition.*;
import java.util.stream.Stream;

//import static io.restassured.RestAssured.options;
//import static io.restassured.RestAssured.when;

import static org.hamcrest.CoreMatchers.containsString;
import static org.hamcrest.core.Is.is;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class UsersApiFeatureTest {

  @Autowired
  private UserRepository userRepository;

  @Before
  public void setUp() {
    userRepository.deleteAll();
  }

  @After
  public void tearDown() {
    userRepository.deleteAll();
  }

  @Test
  public void shouldAllowFullCrudFunctionalityForAUser() throws Exception {

//    User firstUser = new User (
//     (long) 1,
//     "Test User",
//     null
//    );
//
//    User secondUser = new User(
//     (long) 2,
//     "Someone Else",
//     null
//    );
//
//
//
//    Stream.of(firstUser, secondUser)
//     .forEach(user -> {
//       userRepository.save(user);
//     });

    System.setProperty("selenide.browser", "Chrome");

    open("http://localhost:4200");

    //enter in username then check for error message.

    $(byText("Sign Up")).click();
    $("#username").sendKeys("Third User");

    $(byText("Create Account")).click();
    $(byText("Third User's Profile")).click();
    $(byText("Home")).click();
    $(byText("Log Out")).click();

    //go to signup page and check for error message when making duplicate user then return to signin page

    $(byText("Sign In")).exists();
    $("#username").sendKeys("Third User");
    $(byText("Sign In")).click();
    $(byText("Third User's Profile")).click();

    $("#user-profile-add-display-name").sendKeys("Third User!!!!");
    $(byText("Edit Profile")).click();
    $(byText("Third User's Profile!!!")).exists();
    $(byText("Delete Profile")).click();
    Selenide.confirm();
    //Check user is deleted by entering in username then checking for error message.
    Thread.sleep(3000);
  }
}