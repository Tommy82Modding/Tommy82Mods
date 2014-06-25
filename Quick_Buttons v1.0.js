//Quick_Buttons v1.0 by Tommy82

var Runnable = java.lang.Runnable;
var PopupWindow = android.widget.PopupWindow;
var Button = android.widget.Button; 
var Widget = android.widget;
var LinearLayout = Widget.LinearLayout;
var RelativeLayout = Widget.RelativeLayout;
var ViewGroup = android.view.ViewGroup;
var Gravity = android.view.Gravity;
var View = android.view.View;
var AlertDialog = android.app.AlertDialog;
var DialogInterface = android.content.DialogInterface;
var IO = java.io;
var File = IO.File;
var FileOutputStream = IO.FileOutputStream;
var Environment = android.os.Environment;
var BufferedReader = IO.BufferedReader;
var FileReader = IO.FileReader;
var StringBuilder = java.lang.StringBuilder;
var Dialog = android.app.Dialog; 
var ScrollView = android.widget.ScrollView;
var EditText = Widget.EditText;
var ImageView = android.widget.ImageView;
var Color = android.graphics.Color;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var number = android.text.InputType.TYPE_CLASS_NUMBER;
var ToggleButton = android.widget.ToggleButton;
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var GUI = new Widget.PopupWindow();
var Survival = 0;
var Creative = 0;

function newLevel()
{
ctx.runOnUiThread(new Runnable({

run:function(){

try{

var gmb = new Button(ctx)
var tb = new Button(ctx)
var hb = new Button(ctx)

gmb.setText("G");
tb.setText("T");
hb.setText("H");

layout = new LinearLayout

layout.addView(gb)
layout.addView(tb)
layout.addView(hb)

GUI.setContentView(layout);
GUI.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
GUI.showAtLocation(ctx.getWindow().getDecorView(), android.view.Gravity.TOP | Gravity.RIGHT, 130, 0);

gmb.setOnClickListener(new View.OnClickListener({
onClick:function(){
gamemode();
}}));

tb.setOnClickListener(new View.OnClickListener({
onClick:function(){
time();
}}));

hb.setOnClickListener(new View.OnClickListener({
onClick:function(){
health();
}}));
}catch(e){
print("Error: " + e);
}
}
}));
}

function gamemode(){
ctx.runOnUiThread(new Runnable({
run:function(){

var gmlayout = new LinearLayout(ctx);
var gmdialog = new Dialog(ctx);
var scrollv = new ScrollView(ctx);

var sb = new Button(ctx);
var cb = new Button(ctx);

gmlayout.setOrientation(LinearLayout.Vertical);

if(Survival == 0)
{
sb.setText("Survival");
}
else if(Survival == 1)
{
sb.setText("Survival[selected]");
}

if(Creative == 0)
{
cb.setText("Creative");
}
else if(Creative == 1)
{
cb.setText("Creative[selected]");
}

sb.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
sb.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
cb.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
cb.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);

gmlayout.addView(sb)
gmlayout.addView(cb)

scrollv.addView(gmlayout)

gmdialog.setContentView(scrollv)
gmdialog.setTitle("Gamemode")

gmdialog.show()

sb.setOnClickListener(new View.OnClickListener( {
onClick:function(){
Level.setGameMode(0)
gmlayout.dismiss();
}}));

cb.setOnClickListener(new View.OnClickListener( {
onClick:function(){
Level.setGameMode(1)
gmlayout.dismiss();
}
}));

function time(){
ctx.runOnUiThread(new Runnable({
run:function(){

var tlayout = new LinearLayout(ctx);
var tdialog = new Dialog(ctx);
var scrollv = new ScrollView(ctx);

var  sunriseb = new Button(ctx);
var  morningb = new Button(ctx);
var  middayb = new Button(ctx);
var  afternoonb = new Button(ctx);
var  sunsetb = new Button(ctx);
var  nightb = new Button(ctx);

tlayout.setOrientation(LinearLayout.Vertical);

sunriseb.setText("Sunrise");
morningb.setText("Morning");
middayb.setText("Midday");
afternoonb.setText("Afternoon");
sunsetb.setText("Sunset");
nightb.setText("Night");

sunriseb.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
sunriseb.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
morningb.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
morningb.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
middayb.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
middayb.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
afternoonb.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
afternoonb.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
sunsetb.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
sunsetb.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
nightb.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
nightb.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);

tlayout.addView(sunsriseb)
tlayout.addView(morningb)
tlayout.addView(middayb)
tlayout.addView(afternoonb)
tlayout.addView(nightb)

scrollv.addView(tlayout)

tdialog.setContentView(scrollv)
tdialog.setTitle("Set Time")

tdialog.show()

sunriseb.setOnClickListener(new View.OnClickListener( {
onClick:function(){
Level.setTime(0)
tlayout.dismiss();
}}));

morningb.setOnClickListener(new View.OnClickListener( {
onClick:function(){
Level.setTime(0)
tlayout.dismiss();
}}));

middayb.setOnClickListener(new View.OnClickListener( {
onClick:function(){
Level.setTime(0)
tlayout.dismiss();
}}));

sunriseb.setOnClickListener(new View.OnClickListener( {
onClick:function(){
Level.setTime(0)
tlayout.dismiss();
}}));

afternoonb.setOnClickListener(new View.OnClickListener( {
onClick:function(){
Level.setTime(0)
tlayout.dismiss();
}}));

sunsetb.setOnClickListener(new View.OnClickListener( {
onClick:function(){
Level.setTime(0)
tlayout.dismiss();
}}));

nightb.setOnClickListener(new View.OnClickListener( {
onClick:function(){
Level.setTime(0)
tlayout.dismiss();
}
}));

function health(){
ctx.runOnUiThread(new Runnable({
run:function(){

var hlayout = new LinearLayout(ctx);
var hdialog = new Dialog(ctx);
var scrollv = new ScrollView(ctx);

var  fiveb = new Button(ctx);
var  tenb = new Button(ctx);
var  fifteenb = new Button(ctx);
var  twentyb = new Button(ctx);

hlayout.setOrientation(LinearLayout.Vertical);

fiveb.setText("5");
tenb.setText("10");
fifteenb.setText("15");
twentyb.setText("20");

fiveb.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
fiveb.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
tenb.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
tenb.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
fifteenb.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
fifteenb.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);
twentyb.setHeight(LinearLayout.LayoutParams.WRAP_CONTENT);
twentyb.setWidth(LinearLayout.LayoutParams.WRAP_CONTENT);

hlayout.addView(fiveb)
hlayout.addView(tenb)
hlayout.addView(fifteenb)
hlayout.addView(twentyb)

scrollv.addView(hlayout)

hdialog.setContentView(scrollv)
hdialog.setTitle("Set Health")

hdialog.show()

fiveb.setOnClickListener(new View.OnClickListener( {
onClick:function(){
Entity.setHealth(getPlayerEnt(), 5);
tlayout.dismiss();
}}));

tenb.setOnClickListener(new View.OnClickListener( {
onClick:function(){
Entity.setHealth(getPlayerEnt(), 10);
hlayout.dismiss();
}}));

fifteenb.setOnClickListener(new View.OnClickListener( {
onClick:function(){
Entity.setHealth(getPlayerEnt(), 15);
hlayout.dismiss();
}}));

twentyb.setOnClickListener(new View.OnClickListener( {
onClick:function(){
Entity.setHealth(getPlayerEnt(), 20);
hlayout.dismiss();
}
}));

function leaveGame()
{
ctx.runOnUiThread(new Runnable(){
run:function(){
if(GUI!=null){
GUI.dismiss();
}}});
}
