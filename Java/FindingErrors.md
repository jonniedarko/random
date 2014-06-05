#Usefull Error catching and Debuging techniques

####Print stacktrace to String
```java
  StringWriter errors = new StringWriter();
	e.printStackTrace(new PrintWriter(errors));
	String errorString = errors.toString();

```
