// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

let floatingTextarea = document.getElementById("floatingTextarea");
floatingTextarea.innerHTML = `USE [master]
GO
/****** Object:  Database [NewsServiceSystem]    Script Date: 6/22/2022 10:10:07 PM ******/
CREATE DATABASE [NewsServiceSystem]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'NewsServiceSystem', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\NewsServiceSystem.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'NewsServiceSystem_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\NewsServiceSystem_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [NewsServiceSystem] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [NewsServiceSystem].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [NewsServiceSystem] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [NewsServiceSystem] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [NewsServiceSystem] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [NewsServiceSystem] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [NewsServiceSystem] SET ARITHABORT OFF 
GO
ALTER DATABASE [NewsServiceSystem] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [NewsServiceSystem] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [NewsServiceSystem] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [NewsServiceSystem] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [NewsServiceSystem] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [NewsServiceSystem] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [NewsServiceSystem] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [NewsServiceSystem] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [NewsServiceSystem] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [NewsServiceSystem] SET  DISABLE_BROKER 
GO
ALTER DATABASE [NewsServiceSystem] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [NewsServiceSystem] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [NewsServiceSystem] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [NewsServiceSystem] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [NewsServiceSystem] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [NewsServiceSystem] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [NewsServiceSystem] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [NewsServiceSystem] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [NewsServiceSystem] SET  MULTI_USER 
GO
ALTER DATABASE [NewsServiceSystem] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [NewsServiceSystem] SET DB_CHAINING OFF 
GO
ALTER DATABASE [NewsServiceSystem] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [NewsServiceSystem] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [NewsServiceSystem] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [NewsServiceSystem] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [NewsServiceSystem] SET QUERY_STORE = OFF
GO
USE [NewsServiceSystem]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 6/22/2022 10:10:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Customers]    Script Date: 6/22/2022 10:10:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Customers](
	[CusId] [int] IDENTITY(1,1) NOT NULL,
	[CusName] [nvarchar](max) NOT NULL,
	[ShippingAddress] [nvarchar](max) NULL,
 CONSTRAINT [PK_Customers] PRIMARY KEY CLUSTERED 
(
	[CusId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Newsletters]    Script Date: 6/22/2022 10:10:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Newsletters](
	[LetterId] [int] IDENTITY(1,1) NOT NULL,
	[NewsLetterName] [nvarchar](max) NOT NULL,
	[Version] [nvarchar](max) NULL,
	[CreatedDateTime] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_Newsletters] PRIMARY KEY CLUSTERED 
(
	[LetterId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Supplier]    Script Date: 6/22/2022 10:10:08 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Supplier](
	[SupplierId] [int] IDENTITY(1,1) NOT NULL,
	[SupplierName] [nvarchar](max) NOT NULL,
	[Phone] [nvarchar](max) NULL,
 CONSTRAINT [PK_Supplier] PRIMARY KEY CLUSTERED 
(
	[SupplierId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20220615193544_first', N'6.0.6')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20220622165653_final', N'6.0.6')
GO
SET IDENTITY_INSERT [dbo].[Customers] ON 

INSERT [dbo].[Customers] ([CusId], [CusName], [ShippingAddress]) VALUES (1, N'Cocomo', N'Gulshan')
INSERT [dbo].[Customers] ([CusId], [CusName], [ShippingAddress]) VALUES (2, N'Ryn', N'Johar')
SET IDENTITY_INSERT [dbo].[Customers] OFF
GO
SET IDENTITY_INSERT [dbo].[Newsletters] ON 

INSERT [dbo].[Newsletters] ([LetterId], [NewsLetterName], [Version], [CreatedDateTime]) VALUES (1, N'Monster', N'1', CAST(N'2022-06-22T22:07:18.9043637' AS DateTime2))
INSERT [dbo].[Newsletters] ([LetterId], [NewsLetterName], [Version], [CreatedDateTime]) VALUES (2, N'ChainsawMan', N'2', CAST(N'2022-06-22T22:07:32.7121094' AS DateTime2))
SET IDENTITY_INSERT [dbo].[Newsletters] OFF
GO
SET IDENTITY_INSERT [dbo].[Supplier] ON 

INSERT [dbo].[Supplier] ([SupplierId], [SupplierName], [Phone]) VALUES (1, N'blurryface', N'090078601')
SET IDENTITY_INSERT [dbo].[Supplier] OFF
GO
USE [master]
GO
ALTER DATABASE [NewsServiceSystem] SET  READ_WRITE 
GO
`

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
	var copyText = document.getElementById("floatingTextarea");

	copyText.select();

	navigator.clipboard.writeText(copyText.value);
	btn.innerHTML="Copied!"
})