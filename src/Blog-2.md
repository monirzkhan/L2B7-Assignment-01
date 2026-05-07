# Blog Topics: 
How do `Pick` and `Omit` utility types prevent code duplication while creating specialized "slices" of a master interface? Discuss how this keeps your code DRY (Don't Repeat Yourself).

# Introduction: Understanding Pick and Omit in TypeScript as a Beginner

When I first started learning `TypeScript`, I used to create multiple interfaces for almost the same type of data. If I needed a smaller version of a `IUser` object, I would just copy the interface and remove some properties manually.

At first, it felt easy.

But after writing more code, I realized I was repeating the same things again and again. And honestly, it became annoying whenever I had to update something later.

That’s when I learned about the utility types of typescript,  `Pick` and `Omit`.

These utility types help create smaller “slices” from a main interface without rewriting everything. They also help keep the code DRY, which means:

> Don’t Repeat Yourself (DRY)

And as a beginner, this concept actually made my TypeScript code feel much cleaner.

---

# The Problem Without Pick and Omit:

Suppose I have a main `IUser` interface:

```ts
interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}
```

Now imagine I need:

A public profile
A login type
A safe user object without password

A beginner solution might look like this:

```ts
interface IUserProfile {
  id: number;
  name: string;
  email: string;
}

interface ILoginUser {
  email: string;
  password: string;
}
```

This code works. But there’s a problem.

I am repeating fields from the main interface again and again.

Later, if I change something in the original `User` interface, I also need to update all the copied interfaces manually.

That can easily create bugs and confusion.

---

# Understanding DRY (Don't Repeat Yourself):

One thing I’m slowly learning in programming is: Repeating code usually creates problems later.

The DRY principle means I should avoid unnecessary duplication.

Instead of rewriting similar interfaces many times, it’s better to create them from one main source.

That’s exactly why `Pick` and `Omit` utility type exist.

# Using Pick:

Pick allows me to select only the properties I need from an existing interface.

Example:

```ts
interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

type UserProfile = Pick<IUser, "id" | "name" | "email">;

```
Now `UserProfile` automatically gets those fields from `IUser`.

This feels much cleaner because we don’t need to rewrite the types manually.

# Using Omit:

Omit does the opposite.

Instead of selecting fields, it removes fields we don’t want.

Example:

```ts
interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

type SafeUser = Omit<IUser, "password">;

```

This creates a new type without the password field.

I personally found this easier to understand because the name itself explains what it does.

# Why This Is Helpful:

The biggest advantage is that everything stays connected to the main interface.

Suppose later I change this:

```ts
name: string;
```

to 

```ts
fullName: string;
```

If I copied interfaces manually, I would need to update every single one.

But with `Pick` and `Omit`, `TypeScript` helps keep things synced automatically.

That means:

1. Less repeated code
2. Easier updates
3. Cleaner structure
4. Fewer mistakes

# Simple Real-Life Example:

```ts
type LoginInfo = Pick<IUser, "email" | "password">;

type PublicUser = Omit<IUser, "password">;
```

With just two lines, I created two different types from one interface.

That’s much better than writing everything again.


# What I Learned from This:

As a beginner, I used to think utility types were advanced TypeScript features.

But after practicing them, I realized they actually solve very common problems.

`Pick` and `Omit` are mainly about:

avoiding repetition
keeping code cleaner
making updates easier later

And honestly, once I started using them, my interfaces looked much more organized.

# Final Thoughts and Conclusion:

Learning `TypeScript` can feel overwhelming sometimes because there are many new concepts. But utility types like `Pick` and `Omit` are actually very beginner-friendly once I understand the main idea.

For me, the easiest way to think about them is:

Pick → take only what you need
Omit → remove what you don’t need

That’s it.

And by using them, we can keep our code DRY without writing the same interface again and again.